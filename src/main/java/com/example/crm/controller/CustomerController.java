package com.example.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.crm.entity.Customer;
import com.example.crm.service.CustomerService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "customers")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;

	public CustomerController(CustomerService customerService) {
		super();
		this.customerService = customerService;
	}
	
	@PostMapping
	public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
		return new ResponseEntity<Customer>(customerService.saveCustomer(customer),HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable long id) {
		return new ResponseEntity<Customer>(customerService.getCustomerById(id),HttpStatus.OK);
	}
	
	@GetMapping
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomers();
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer, @PathVariable("id") long id){
		return new ResponseEntity<Customer>(customerService.updateCustomer(customer, id),HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public void deleteCustomer(@PathVariable("id") Long id) {
		customerService.deleteCustomer(id);
	}
}
