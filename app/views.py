from django.shortcuts import render
from django.shortcuts import HttpResponse
from .models import Product

# Create your views here.
def say_hello(request):
    products = Product.objects.all()
    return render(request, 'index.html',{'products':products},)