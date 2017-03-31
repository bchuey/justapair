from rest_framework import serializers

from products.models import Jean, Brand, Size, Style, Color



class BrandModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Brand
        fields = [
            'id',
            'name',
        ]


class SizeModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Size
        fields = [
            'id',
            'waist',
            'length',
        ]


class StyleModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Style
        fields = [
            'id',
            'style_type',
        ]


class ColorModelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Color
        fields = [
            'id',
            'hex_value',
        ]

class JeanModelSerializer(serializers.ModelSerializer):
    
    colors = ColorModelSerializer(many=True)
    sizes = SizeModelSerializer(many=True)
    style = StyleModelSerializer()
    brand_name = BrandModelSerializer()
    

    class Meta:
        model = Jean
        fields = [
            'id',
            'title',
            'description',
            'price',
            'colors', 
            'sizes', 
            'brand_name',
            'style',

        ]
