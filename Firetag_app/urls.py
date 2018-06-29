from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^home/', views.home, name='home'),
    url(r'^contact/', views.contact, name='contact'),
    url(r'^services/', views.services, name='services'),
    url(r'^enviroment/', views.enviroment, name='enviroment'),
    url(r'^games/', views.games, name='games'),
]