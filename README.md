# Event Management System Test Case Report

## Use Cases

1. User Registration
   - Users can register by providing their full name, email address, age, password, and credit card information.
   - The system validates the input data according to specified criteria.

2. Event Selection
   - Users can browse and select events from the available options.

3. Payment Processing
   - The system securely processes payments for selected events.

4. Email Confirmation
   - Users receive a confirmation email after successful registration and payment.

5. Profile Management
   - Users can view and edit their profile information.

6. Password Recovery
   - Users can request a password reset link if they forget their password.

7. Event Details Page
   - Users can view detailed information about specific events.

8. User Roles
   - The system supports different access levels for admin and regular users.

9. Search Functionality
   - Users can search for events based on date, location, and category.

10. User Reviews and Ratings
    - Users can rate and review events they have attended.

11. Notification System
    - Users receive notifications about event updates and changes.

12. Event Cancellation
    - Users can cancel their event registration within specified time frames.

13. Promotional Discount Codes
    - Users can apply discount codes during the payment process.

14. Mobile Responsiveness
    - The system is accessible and fully functional on mobile devices.

15. Data Export
    - Administrators can export data in CSV or Excel format.

16. Session Management
    - The system manages user sessions and handles inactivity timeouts.

17. Multi-Language Support
    - The system supports multiple languages for a diverse user base.

18. Group Registration Discounts
    - Users can register multiple participants with applicable discounts.

19. Early Bird Registration
    - Users can benefit from early bird discounts when registering in advance.

20. Promotional Code Validation
    - The system validates promotional codes during the checkout process.

21. Payment Plan Options
    - Users can select from various payment plans for high-cost events.

22. Event Bundle Registration
    - Users can register for multiple events with bundle discounts.

23. Customizable Registration Options
    - Users can select additional options during the registration process.

24. Referral Program
    - Users can enter referral codes to receive discounts.

## Test Cases

1. User Registration
   - Validate full name input (1-50 alphabetic characters)
   - Verify email address format
   - Confirm age is between 18 and 100
   - Ensure password meets complexity requirements
   - Validate credit card information (16 numeric digits)

2. Event Selection
   - Verify users can browse and select events

3. Payment Processing
   - Confirm secure payment processing

4. Email Confirmation
   - Verify receipt of confirmation email

5. Profile Management
   - Ensure profile information is displayed and editable

6. Password Recovery
   - Confirm reset link is sent when requested

7. Event Details Page
   - Verify event information is correctly displayed

8. User Roles
   - Validate different access levels for admin and user roles

9. Search Functionality
   - Test search options for date, location, and category

10. User Reviews and Ratings
    - Verify users can rate (1-5 stars) and review (≤200 characters) events

11. Notification System
    - Confirm notifications are received for event updates

12. Event Cancellation
    - Test cancellation process and refund policies

13. Promotional Discount Codes
    - Validate 4-digit numeric discount codes

14. Mobile Responsiveness
    - Ensure system is fully responsive on mobile devices

15. Data Export
    - Verify administrators can export data in CSV or Excel format

16. Session Management
    - Test user logout after specified inactivity period

17. Multi-Language Support
    - Confirm system supports multiple languages

18. Group Registration Discounts
    - Verify discount application for multiple participants

19. Early Bird Registration
    - Test early bird discounts for registrations 30+ days before event

20. Promotional Code Validation
    - Verify promotional code validation during checkout

21. Payment Plan Options
    - Test various payment plans for high-cost events

22. Event Bundle Registration
    - Confirm discounts for multiple event registrations

23. Customizable Registration Options
    - Verify additional options can be selected during registration

24. Referral Program
    - Test referral code application and associated discounts

Each test case should be executed with both valid and invalid inputs to ensure proper functionality and error handling. The system should be thoroughly tested for usability, performance, and security across all 