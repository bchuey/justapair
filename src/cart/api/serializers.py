from rest_framework import serializers

from cart.models import Cart

class CartModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Cart
        fields = [
            'id',
            # 'owner',
            'products',
        ]
