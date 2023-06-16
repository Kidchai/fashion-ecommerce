package kidchai.fashion.ecommerce.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    @NotEmpty(message = "Product name is required")
    @Size(max = 100, message = "Product name must be no more than 100 characters")
    private String name;

    @Column(name = "description")
    @Size(max = 500, message = "Product description must be no more than 500 characters")
    private String description;

    @Column(name = "price")
    @NotNull(message = "Product price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Product price must be greater than 0")
    private Double price;

    @Column(name = "category")
    @NotEmpty(message = "Product category is required")
    @Size(max = 50, message = "Product category must be no more than 50 characters")
    private String category;

    @URL(message = "Product image must be a valid URL")
    @Column(name = "image")
    private String image;
}
