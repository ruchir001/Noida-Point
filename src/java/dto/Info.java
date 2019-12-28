package np.dto;

public class Info {
private int info_id, category_id;
private String description,address,contactNo;
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public int getCategory_id() {
	return category_id;
}
public void setCategory_id(int category_id) {
	this.category_id = category_id;
}
public String getContactNo() {
	return contactNo;
}
public void setContactNo(String contactNo) {
	this.contactNo = contactNo;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public int getInfo_id() {
	return info_id;
}
public void setInfo_id(int info_id) {
	this.info_id = info_id;
}
}
