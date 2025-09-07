﻿using static System.Console;
// Value type
int a = 5;
int b = a;
b = 10;

Console.WriteLine($"this a: {a}, this is b: {b}");

// reference type 

Person Bob = new();
Person Sam = Bob;

Bob.Name = "Bob";
Bob.Age = 25;
Sam.Age = 20;
Sam.Name = "Sam";
var hob1 = new Hobby()
{
    Name = "Hob1",
    Type = "Sports"
};

var hob2 = new Hobby()
{
    Name = "Hob2",
    Type = "Arts"
};

Sam.Hobby = Bob.Hobby;
Bob.Hobby = hob2;

List<string> myList = new()
{
    "test1",
    "test2",
    "test3"
};
foreach (var item in myList)
{
    WriteLine($"this is foreach myList: {item}");
}
for (int i = 0; i < myList.Count; i++)
{
    WriteLine($"this is for myList: {myList[i]}");
}
//Console.WriteLine($"this is Bob and Same Name: {Bob.Name} - {Sam.Name}");
//Console.WriteLine($"this is Bob and Same Age: {Bob.Age} - {Sam.Age}");
//Console.WriteLine($"this is Bob and Same Hobby: {Bob.Hobby.Name} - {Sam.Hobby?.Name}");


string value = "init string";
WriteLine($"My value is: {value}");
Person person1 = new();
var person2 = new Person();
Person.test = "something";
WriteLine(Person.test);
Person.TestMethod();
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    public Hobby Hobby { get; set; }
    public static string test = "string";
    public static void TestMethod() {
        WriteLine($"test method: {test}");
    }
}

public class Hobby
{
    public string Name {  set; get; }
    public string Type { set; get; }
}


