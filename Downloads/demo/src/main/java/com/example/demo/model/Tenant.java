package  com.example.demo.model;

public class Tenant {
    private Long id;
    private String name;
    private String apartmentNumber;
    private String email;
    private String phone;
    private String occupation;
    private Double rentAmount;
    private Boolean hasPaidThisMonth;
    private Double amountOwed; 
    private String notes;
    private Boolean contractSigned;

    public Tenant() {}

    public Tenant (Long id, String name, String apartmentNumber, String email, String phone,
                  Double rentAmount, Boolean hasPaidThisMonth, Double amountOwed,
                  Boolean contractSigned, String notes, String occupation){
        this.id = id;
        this.name = name;
        this.apartmentNumber = apartmentNumber;
        this.email = email;
        this.phone = phone;
        this.rentAmount = rentAmount;
        this.hasPaidThisMonth = hasPaidThisMonth;
        this.amountOwed = amountOwed;
        this.contractSigned = contractSigned;
        this.notes = notes;
        this.occupation = occupation;
                  }

        public Long getId() {return id;}
        public void setId(Long id) {this.id = id; }

        public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getApartmentNumber() { return apartmentNumber; }
    public void setApartmentNumber(String apartmentNumber) { this.apartmentNumber = apartmentNumber; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Double getRentAmount() { return rentAmount; }
    public void setRentAmount(Double rentAmount) { this.rentAmount = rentAmount; }

    public Boolean getHasPaidThisMonth() { return hasPaidThisMonth; }
    public void setHasPaidThisMonth(Boolean hasPaidThisMonth) { this.hasPaidThisMonth = hasPaidThisMonth; }

    public Double getAmountOwed() { return amountOwed; }
    public void setAmountOwed(Double amountOwed) { this.amountOwed = amountOwed; }

    public Boolean getContractSigned() { return contractSigned; }
    public void setContractSigned(Boolean contractSigned) { this.contractSigned = contractSigned; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }
}