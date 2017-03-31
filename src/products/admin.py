from django.contrib import admin

# Register your models here.
from products.models import Product, Jean, ProductImage, Brand, Style, Size, Color

admin.site.register(Product)
admin.site.register(Jean)
admin.site.register(ProductImage)
admin.site.register(Brand)
admin.site.register(Style)
admin.site.register(Size)
admin.site.register(Color)
