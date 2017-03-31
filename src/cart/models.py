from django.db import models
from accounts.models import User

from products.models import Product
# Create your models here.

class Cart(models.Model):
	
	# account = models.ForeignKey(User)
	products = models.ManyToManyField(Product)

	def __str__(self):

		return str(self.id)
