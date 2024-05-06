from django.shortcuts import render, redirect
from django.http import HttpResponse 
from django.contrib import messages 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login ,logout as auth_logout 
from .forms import SignUpForm

from chat.models import Room, Message
from django.http import HttpResponse, JsonResponse

# Create your views here.

def home(request):
    return render(request, 'dashboard/index.html')
def user_count(request):
    total_users = User.objects.count()


def react_view(request):
    requested_url = request.path
    return render(request, 'index.html', {'requested_url': requested_url})