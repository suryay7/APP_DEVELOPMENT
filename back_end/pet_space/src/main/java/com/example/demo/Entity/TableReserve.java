package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="Table_Reservation")
@Entity
public class TableReserve {
@Id
@Column(name="Id")
private int Id;
@Column(name="Booking_Name")
private String Booking_Name;
@Column(name="Date")
private int Date;
@Column(name="Time")
private int Time;
@Column(name="Party_size")
private int Party_size;
public int getId()
{
	return Id;
}
public void setId(int Id)
{
	this.Id=Id;
}
public String getBooking_Name()
{
	return Booking_Name;
}
public void set(String Booking_Name)
{
	this.Booking_Name=Booking_Name;
}
public int getDate()
{
	return Date;
}
public void setDate(int Date)
{
	this.Date=Date;
}
public int getTime()
{
	return Time;
}
public void setTime(int Time)
{
	this.Time=Time;
}
public int getParty_size()
{
	return Party_size ;
}
public void setParty_size(int Party_size)
{
	this.Party_size=Party_size;
}
public TableReserve(int Id, String Booking_Name, int Date, int Time, int Party_size)
{
	super();
	this.Id=Id;
	this.Booking_Name=Booking_Name;
	this.Date=Date;
	this.Time=Time;
	this.Party_size=Party_size;

}
public TableReserve()
{
	
}
}
