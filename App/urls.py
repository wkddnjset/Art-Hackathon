from django.urls import path
from .views import MainPage, SecondPage, ThirdPage

app_name = "App"
urlpatterns = [
    path('', MainPage, name="home"),
    path('second', SecondPage, name="second"),
    path('third', ThirdPage, name="third"),

]