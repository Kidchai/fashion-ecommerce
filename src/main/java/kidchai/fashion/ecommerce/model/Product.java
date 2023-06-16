package kidchai.fashion.ecommerce.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.URL;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    @NotEmpty(message = "Product name is required")
    @Max(value = 100, message = "Product name must be no more than 100 characters")
    private String name;

    @Column(name = "description")
    @Max(value = 500, message = "Product description must be no more than 500 characters")
    private String description;

    @Column(name = "price")
    @NotNull(message = "Product price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Product price must be greater than 0")
    private Double price;

    @Column(name = "category")
    @NotEmpty(message = "Product category is required")
    @Max(value = 50, message = "Product category must be no more than 50 characters")
    private String category;

    @URL(message = "Product image must be a valid URL")
    @Column(name = "image")
    private String image;
}
