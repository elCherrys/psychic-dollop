from django.urls import path
from . import views
urlpatterns= [
    path('', views.say_hello),
    path('update_item/', views.updateItem, name="update_item"),
]