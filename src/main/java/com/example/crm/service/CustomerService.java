package com.example.crm.service;

import java.util.List;

import com.example.crm.entity.Customer;

public interface CustomerService {
	Customer saveCustomer(Customer customer);
	
	Customer getCustomerById(Long id);
	
	List<Customer> getAllCustomers();
	
	Customer updateCustomer(Customer customer, Long id);
	
	void deleteCustomer(Long id);
	
}
