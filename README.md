Create an API endpoint with payload validations for adding a product in the fashion e-commerce application Description:

As a user, I want to be able to add a new product to the fashion e-commerce application via an API endpoint. The API endpoint should accept a JSON payload with the following properties:
- Product name (required, maximum length: 100 characters)
- Product description (optional, maximum length: 500 characters)
- Product price (required, positive decimal number)
- Product category (required, maximum length: 50 characters)
- Product image URL (optional, valid URL format)

The API endpoint should validate the input payload and return a success message along with the newly created product data. If any of the required fields are missing or the payload fails validation, the endpoint should return an error message with an appropriate error code.

Acceptance Criteria:
1. When a POST request is sent to the API endpoint with a valid payload, a new product should be created and a success message with the product data should be returned.
2. When a POST request is sent to the API endpoint with an invalid or incomplete payload, an error message with an appropriate error code should be returned.
3. The API endpoint should validate the payload according to the specified rules and handle validation errors gracefully.
4. The product details should be stored in the database for future retrieval.

Sub-tasks:
1. Design the database schema for the product table.
2. Create a RESTful API endpoint for adding a product.
3. Implement payload validation using Spring Boot's validation annotations and constraints.
4. Configure appropriate error handling and response messages for validation errors.
5. Implement the logic to save the product details in the database.
6. Write unit tests to validate the API endpoint and payload validations.
7. Document the API endpoint and its usage, including the expected payload format and response structure.
8. Test the API endpoint thoroughly, ensuring it meets the acceptance criteria.
