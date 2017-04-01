# from django.db.models import Q
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from accounts.models import User
from accounts.serializers import UserRegistrationSerializer, UserSerializer

from cart.models import Cart
from cart.api.serializers import CartModelSerializer

from products.models import Product

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

class CartCreateAPIView(generics.CreateAPIView):
    serializer_class = CartModelSerializer


    # def perform_create(self, serializer):
    # 	request.session['cart'] = serializer
    #     return None



# retrieve cart
class CartRetrieveAPIView(generics.RetrieveAPIView):

	serializer_class = CartModelSerializer

class AddToCartAPIView(APIView):

	def post(self, request):

		new_cart = Cart()
		new_cart.save()

		added_product = Product.objects.get(pk=request.body)
		
		new_cart.products.add(added_product)

		serialized_cart = CartModelSerializer(new_cart)
		
		# print('the serialized cart', serialized_cart)
		# print('the serialized cart data', serialized_cart.data)

		return Response(serialized_cart.data)



		