from django.db import models

# Create your models here.

class Product(models.Model):

	# attributes go here
	title = models.CharField(max_length=200)
	description = models.TextField()

	# class Meta:
	"""
		Model metadata is “anything that’s not a field”, such as ordering options (ordering), database table name (db_table), or human-readable singular and plural names (verbose_name and verbose_name_plural). None are required, and adding class Meta to a model is completely optional.
	"""

	# model methods
	"""
	Define custom methods on a model to add custom “row-level” functionality to your objects. Whereas Manager methods are intended to do “table-wide” things, model methods should act on a particular model instance.

	This is a valuable technique for keeping business logic in one place – the model.
	"""

	def __str__(self):

		return self.title


	"""
	def get_absolute_url(self):
    from django.urls import reverse
    return reverse('people.views.details', args=[str(self.id)])

	"""
	# def get_absolute_url(self):

		# return 


# class Jean(Product):

# 	# attributes go here
# 	color = models.CharField() # based on the actual brand and style
# 	waist = models.CharField() # preset 
# 	length = models.CharField() # preset 
# 	brand = models.CharField() # preset - relationship
# 	style = models.CharField() # preset - relationship 

# 	def __str__(self):

# 		return self.title


# 	# certain attributes iwll be used for filtering


# class Brand(models.Model):

# 	name = models.CharField()

# 	def __str__(self):

# 		return self.name


# 	# will be used for filtering
# 	# might need a custom Manager

# class Style(models.Model):

# 	style_type = models.CharField()

# 	def __str__(self):

# 		return self.style_type


# 	# will be used for filtering
# 	# might need a custom Manager


# class Size(models.Model):

# 	dimension = models.CharField()

# 	def __str__(self):

# 		return str(self.dimension)

# class ProductImage(models.Model):

# 	def __str__(self):

# 		return self.img_filename