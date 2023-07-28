package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.TableReserve;
import com.example.demo.Repo.TableReserveRepo;

@Service
public class TableReserveService {
@Autowired
private TableReserveRepo dtl;
public TableReserve saveDetails(TableReserve t) {
	return dtl.save(t);
}
public List<TableReserve> getAllDetails()
{
	return dtl.findAll();
}
public void deleteDepartmentById(int Id)
{
	dtl.deleteById(Id);
}
public TableReserve update(int Id, TableReserve t)
{
	return dtl.save(t);
}
}