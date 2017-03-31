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


# add to cart
# @csrf_exempt
# def add_to_cart(request):
# 	print(request)
# 	print(request.body)
# 	print("uhhh added to cart")
# 	# if 'cart' in request.session:
# 	# 	current_cart = request.session['cart']
# 	# else:
# 	# 	current_cart = Cart.create(account=request.user)

# 	# product = Product.objects.get(pk=request.data['product_id'])

# 	# current_cart.products.add(product)

# 	# current_cart = CartModelSerializer()

# 	# return Response({
# 	# 	'cart': current_cart
# 	# 	})
# 	new_cart = Cart()
# 	new_cart.save()
# 	print(new_cart)
# 	added_product = Product.objects.get(pk=request.body)
# 	print(added_product)
# 	new_cart.products.add(added_product)
	

# 	return Response({'cart': new_cart})


class AddToCartAPIView(APIView):

	def post(self, request):
		print(request)
		print(request.body)
		print("uhhh added to cart")
		# if 'cart' in request.session:
		# 	current_cart = request.session['cart']
		# else:
		# 	current_cart = Cart.create(account=request.user)

		# product = Product.objects.get(pk=request.data['product_id'])

		# current_cart.products.add(product)

		# current_cart = CartModelSerializer()

		# return Response({
		# 	'cart': current_cart
		# 	})
		new_cart = Cart()
		new_cart.save()
		print(new_cart)
		added_product = Product.objects.get(pk=request.body)
		print(added_product)
		new_cart.products.add(added_product)

		serialized_cart = CartModelSerializer(new_cart)
		print('the serialized cart', serialized_cart)
		print('the serialized cart data', serialized_cart.data)
		return Response(serialized_cart.data)