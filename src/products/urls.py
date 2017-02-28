from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _

from products import views as product_views

urlpatterns = [
    # url(_(r'^register/$'), account_views.UserRegisterView.as_view(), name='register'),
    url(_(r'^all/$'), product_views.ProductListView.as_view(), name='all')
]
