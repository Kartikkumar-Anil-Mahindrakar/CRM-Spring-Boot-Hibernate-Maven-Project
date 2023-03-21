package com.example.crm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crm.entity.Customer;
import com.example.crm.exception.ResourseNotFoundException;
import com.example.crm.repository.CustomerRepository;
import com.example.crm.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public CustomerServiceImpl(CustomerRepository customerRepository) {
		super();
		this.customerRepository = customerRepository;
	}


	@Override
	public Customer saveCustomer(Customer customer) {
		
		return customerRepository.save(customer);
	}


	@Override
	public Customer getCustomerById(Long id) {
		Customer customer = customerRepository.findById(id).orElseThrow(()->new ResourseNotFoundException("Customer", "id", id));
		return customer;
	}


	@Override
	public List<Customer> getAllCustomers() {
		
		return customerRepository.findAll();
	}


	@Override
	public Customer updateCustomer(Customer customer, Long id) {
		Customer existingCustomer = customerRepository.findById(id).orElseThrow(()->new ResourseNotFoundException("Customer", "id", id));
		existingCustomer.setFirstName(customer.getFirstName());
		existingCustomer.setLastName(customer.getLastName());
		existingCustomer.setSalary(customer.getSalary());
		existingCustomer.setEmail(customer.getEmail());
		return customerRepository.save(existingCustomer);
		
	}


	@Override
	public void deleteCustomer(Long id) {
		customerRepository.deleteById(id);
		
	}
	
}
