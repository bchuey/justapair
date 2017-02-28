from django.shortcuts import render
from django.utils import timezone
from django.views.generic.list import ListView


from products.models import Product
# Create your views here.


class ProductListView(ListView):

    model = Product