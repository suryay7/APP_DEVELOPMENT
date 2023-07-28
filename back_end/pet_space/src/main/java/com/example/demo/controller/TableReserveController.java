package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.TableReserve;
import com.example.demo.Service.TableReserveService;


@CrossOrigin
@RestController
public class TableReserveController{
@Autowired

private TableReserveService dtlservice;
@GetMapping("/gett")

public List<TableReserve> getDetails(){
	return dtlservice.getAllDetails();
}

@PostMapping("/addt")
public TableReserve postDetails(@RequestBody TableReserve t) {
	 return dtlservice.saveDetails(t);
}

@DeleteMapping("/deletet/{Id}")
public String delete(@PathVariable int Id)
{
	dtlservice.deleteDepartmentById(Id);
	return "Deleted";
}

@PutMapping("/Updatet/{Id}")
public TableReserve update(@PathVariable int Id,@RequestBody TableReserve t)
{
	return dtlservice.update(Id, t);
}

}
