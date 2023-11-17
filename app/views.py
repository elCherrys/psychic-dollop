from django.shortcuts import render
from django.shortcuts import HttpResponse
from .models import Product
from django.http import JsonResponse

# Create your views here.
def say_hello(request):
    products = Product.objects.all()
    return render(request, 'index.html',{'products':products},)

def updateItem(request):
    return JsonResponse('Item added', safe=False)