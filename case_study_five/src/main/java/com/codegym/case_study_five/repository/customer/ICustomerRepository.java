package com.codegym.case_study_five.repository.customer;



import com.codegym.case_study_five.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

//    @Query(value="select * from customer where customer.name like %:name%",nativeQuery = true)
//    List<Customer> findByName(@Param("name")String name);


//    @Query(value = "select * from customer where customer.name like %:name%", nativeQuery = true)
//    List<Customer> findByName(@Param("name") String name);
//
//    @Query(value = "select * from customer where customer.code like %:code%", nativeQuery = true)
//    List<Customer> findByCode(@Param("code") String code);
//
//    @Query(value = "select * from customer where customer.name  like %:name% and customer.code like %:code%", nativeQuery = true)
//    List<Customer> findByNameTwo(@Param("name") String name, @Param("code") String code);
}
