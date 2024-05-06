from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index1, name = "index1"),
    path('home/', views.index, name = "index"),
    path('home/profile/', views.profile, name = "profile"),
    path('home/about/', views.about, name = "about"),
    path('home/faq/', views.faq, name = "faq"),
    path('home/contact/', views.contact, name = "contact"),
    path('home/resume/', views.resume, name = "resume"),
    path('home/get_resume/', views.get_resume, name = "get_resume"),
]
