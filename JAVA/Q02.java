package JAVA;

// ######################################################
// Interview Question #02
// Write a program to reverse a string without using
// inbuilt reverse() method.
// #####################################################$

public class Q02 {

	public static void main(String[] args) {
		String input = "Java Questions";
		String result = "";
		for (int i = input.length() - 1; i >= 0; i--) {
			result = result + input.charAt(i);
		}
		System.out.println("Input: " + input);
		System.out.println("Output: " + result);
	}
}
