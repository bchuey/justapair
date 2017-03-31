from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _

from products.api.views import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    # url(_(r'^register/$'), account_views.UserRegisterView.as_view(), name='register'),
    url(_(r'^all/$'), ProductListAPIView.as_view(), name='all'),
    url(_(r'^(?P<pk>\d+)/$'), ProductDetailAPIView.as_view(), name='detail')
]
