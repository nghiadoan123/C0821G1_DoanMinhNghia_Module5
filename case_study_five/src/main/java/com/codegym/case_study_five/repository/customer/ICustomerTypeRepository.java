package com.codegym.case_study_five.repository.customer;


import com.codegym.case_study_five.model.customer.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerTypeRepository extends JpaRepository<CustomerType,Integer> {
}
