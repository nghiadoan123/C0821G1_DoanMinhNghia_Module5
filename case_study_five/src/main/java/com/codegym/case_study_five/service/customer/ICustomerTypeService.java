package com.codegym.case_study_five.service.customer;


import com.codegym.case_study_five.model.customer.CustomerType;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ICustomerTypeService {

    List<CustomerType> getAll();

    CustomerType findById(Integer id);

    void save(CustomerType customerType);

    List<CustomerType> findByName(String name);

    void remove(Integer id);

}
