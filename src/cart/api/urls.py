from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _

from cart.api.views import CartCreateAPIView, CartRetrieveAPIView, AddToCartAPIView

urlpatterns = [
    # url(_(r'^register/$'), account_views.UserRegisterView.as_view(), name='register'),
    # url(_(r'^all/$'), ProductListAPIView.as_view(), name='all'),
    # url(_(r'^(?P<pk>\d+)/$'), ProductDetailAPIView.as_view(), name='detail')

    url(_(r'^create/$'), CartCreateAPIView.as_view(), name='create'),
    url(_(r'^retrieve/$'), CartRetrieveAPIView.as_view(), name='retrieve'),
    url(_(r'^product/add/$'), AddToCartAPIView.as_view(), name='add'),
]
