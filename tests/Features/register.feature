@register @E2E
Feature: To Validate and verify the Registration Functionallity of the faceBook Application

Background:
Given The user should be in faceBook Page

@regression
Scenario: Invalid Register-To validate the Registration Functionallity

When  The user has to click the create new account button
And The user has to fill the firstname,lastname and other details
And The user has to click the submit button
Then The user should be get successfully Registered

@retest @regression
Scenario: valid Register-To validate the Registration Functionallity

When  The user has to click the create new account button
And The user has to fill the firstname,lastname and other details
And The user has to click the submit button
Then The user should be get successfully Registered






