from django.shortcuts import render

# Create your views here.

def MainPage(request):
    return render(request, 'index.html', {})

def SecondPage(request):
    return render(request, 'index_2.html', {})

def ThirdPage(request):
    return render(request, 'index_3.html', {})

