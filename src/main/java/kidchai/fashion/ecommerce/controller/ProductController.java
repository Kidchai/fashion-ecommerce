package kidchai.fashion.ecommerce.controller;

import jakarta.validation.Valid;
import kidchai.fashion.ecommerce.model.Product;
import kidchai.fashion.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@Valid @RequestBody Product product) {
        productService.saveProduct(product);
        return ResponseEntity.ok(product);
    }
}
