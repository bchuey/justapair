from django.db.models import Q
from rest_framework import generics
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from products.models import Jean

from products.api.serializers import JeanModelSerializer

class ProductListAPIView(generics.ListAPIView):

    serializer_class = JeanModelSerializer
    
    def get_queryset(self, *args, **kwargs):
    	return Jean.objects.all()


class ProductDetailAPIView(generics.ListAPIView):

	queryset = Jean.objects.all()
	serializer_class = JeanModelSerializer

	def get_queryset(self, *args, **kwargs):
		product_id = self.kwargs.get("pk")
		qs = Jean.objects.filter(pk=product_id)

		return qs
