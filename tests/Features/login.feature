@login @E2E
Feature: To Validate and verify the login Functionallity of the faceBook Application

Background:
Given The user should be in faceBook Page

@smoke @regression
Scenario: Invalid Login -To validate the login Functionallity with Invalid Credentials

When  The user has to fill the userName "ramesh@gmail.com" and Password "1234567"
And The user has to click the login button
Then  The user should navigate the invalid Page

@sanity @regression
Scenario: Valid Login-To validate the login Functionallity with valid Credentials

When  The user has to fill the userName "mano@gmail.com" and Password "7345672"
And The user has to click the login button
Then  The user should navigate the invalid Page






