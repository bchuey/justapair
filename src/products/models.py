from django.db import models

# Create your models here.

class Product(models.Model):

	# attributes go here
	title = models.CharField(max_length=200)
	description = models.TextField()
	images = models.ManyToManyField('ProductImage', blank=True)
	price = models.DecimalField(max_digits=7, decimal_places=2, default=00.00)
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


class Jean(Product):

	# attributes go here
	colors = models.ManyToManyField('Color')
	sizes = models.ManyToManyField('Size') 
	brand_name = models.ForeignKey('Brand', on_delete=models.CASCADE)
	style = models.ForeignKey('Style', on_delete=models.CASCADE) 

	def __str__(self):

		return self.title


	# certain attributes iwll be used for filtering

class ProductImage(models.Model):

	img_filename = models.CharField(max_length=255)

	def __str__(self):

		return self.img_filename

class Brand(models.Model):

	name = models.CharField(max_length=255)

	def __str__(self):

		return self.name


	# will be used for filtering
	# might need a custom Manager

class Style(models.Model):

	style_type = models.CharField(max_length=125)

	def __str__(self):

		return self.style_type


	# will be used for filtering
	# might need a custom Manager


class Size(models.Model):

	waist = models.CharField(max_length=2)
	length = models.CharField(max_length=2)

	def __str__(self):

		return '{0}x{1}'.format(self.waist,self.length)

class Color(models.Model):

	hex_value = models.CharField(max_length=7)

	def __str__(self):

		return self.hex_value










