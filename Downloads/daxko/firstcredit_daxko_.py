import requests
import logging
from datetime import datetime
import os
from dotenv import load_dotenv


# Load environment variables from .env file
load_dotenv()

# Setup logging
logging.basicConfig(filename='new_log.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Constants for authentication and URLs
AUTH_URL = os.getenv("AUTH_URL")
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
SCOPE = os.getenv("SCOPE")
FILES_URL = "https://api.partners.daxko.com/api/v1/bulk-data/drive/files"
DOWNLOAD_URL_BASE = "https://api.partners.daxko.com/api/v1/bulk-data/drive/download"
PREFIX = "FirstCreditPaymentByItem"

def authenticate():
    """
    Authenticate with the Daxko API and return the access token.
    """
    payload = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "scope": SCOPE,
        "grant_type": "client_credentials"
    }
    headers = {"Content-Type": "application/json"}
    
    logging.info("Attempting authentication...")
    response = requests.post(AUTH_URL, json=payload, headers=headers)
    
    if response.status_code == 200:
        logging.info("Authentication successful.")
        return response.json().get("access_token")
    else:
        logging.error("Authentication failed: %s", response.text)
        return None

def list_files_in_prefix(access_token, prefix, start_after_file):
    """
    List files in the specified prefix using the provided access token and filter by startAfterFile.
    """
    logging.info(f"Listing files in prefix '{prefix}' starting after '{start_after_file}'...")
    headers = {"Authorization": f"Bearer {access_token}"}
    params = {"pageSize": 100, "prefix": prefix, "startAfterFile": start_after_file}
    
    response = requests.get(FILES_URL, headers=headers, params=params)
    
    if response.status_code == 200:
        files = response.json().get("results", [])
        if files:
            logging.info(f"Found {len(files)} files in prefix '{prefix}' after '{start_after_file}'.")
            
            # Log all available file names and their modification dates
            for file in files:
                logging.info(f"File: {file['name']} Last Modified: {file['lastModifiedAtUtc']}")
            
            return files
        else:
            logging.info("No files found.")
            return []
    else:
        logging.error("Failed to list files: %s", response.text)
        return []

def generate_download_url(access_token, file_name):
    """
    Generate a download URL for the specified file.
    """
    logging.info(f"Generating download URL for {file_name}...")
    headers = {"Authorization": f"Bearer {access_token}", "Content-Type": "application/json"}
    params = {"fileName": file_name}
    response = requests.post(DOWNLOAD_URL_BASE, headers=headers, params=params)
    
    if response.status_code == 200:
        return response.json().get("downloadUrl")
    else:
        logging.error(f"Failed to generate download URL for {file_name}: {response.text}")
        return None

def download_file(url, local_filename):
    """
    Download the file from the given URL to the specified local filename.
    """
    logging.info(f"Downloading file from {url}...")
    response = requests.get(url, stream=True)
    
    if response.status_code == 200:
        with open(local_filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        logging.info(f"File downloaded: {local_filename}")
    else:
        logging.error(f"Failed to download file from {url}: {response.status_code}")

def main():
    """
    Main function to execute the process of authenticating, listing files for specific dates,
    and downloading those files.
    """
    logging.info("Starting process...")

    try:
        access_token = authenticate()
        if access_token:
            # List of target dates in the format MM-DD-YYYY
            target_dates = ["08-10-2024", "08-11-2024", "08-12-2024"]
            
            for date_str in target_dates:
                # Set start_after_file for each date
                start_after_file = f"{PREFIX}/{PREFIX}-{date_str}"
                
                # List files for the specific date
                files = list_files_in_prefix(access_token, PREFIX, start_after_file)
                
                for file in files:
                    # Process each file found for the specified date
                    file_name = file["name"]
                    logging.info(f"Processing file for date {date_str}: {file_name}")
                    
                    # Generate download URL for the file
                    download_url = generate_download_url(access_token, file_name)
                    if download_url:
                        local_filename = f"{file_name.split('/')[-1]}"  # Extract the file name from the URL
                        download_file(download_url, local_filename)
                    else:
                        logging.warning(f"Skipping {file_name} due to missing download URL.")
        else:
            logging.error("Authentication failed. Exiting.")
    except Exception as e:
        logging.error(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()
