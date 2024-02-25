package JAVA;

// ######################################################
// Interview Question #01
// Write a program to find the age of a person in years.
// #####################################################$

import java.time.LocalDate;
import java.time.Period;

public class Q01 {

	public static void main(String[] args) {
		LocalDate today = LocalDate.now();
		LocalDate birthDate = LocalDate.of(1967, 1, 11);
		Period period = Period.between(birthDate, today);
		System.out.println("Age: " + period.getYears());
	}
}
