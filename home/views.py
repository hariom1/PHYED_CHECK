from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from home.models import Contact_us
# Create your views here.
# def index(request):
#     return render(request, 'home/index.html',User)
def index(request):
    return render(request, 'dashboard/index.html')
def index1(request):
    return render(request, 'home/index.html')

def profile(request):
    return render(request, 'dashboard/users-profile.html')
def faq(request):
    return render(request, 'dashboard/pages-faq.html')
def contact(request):
    return render(request, 'dashboard/pages-contact.html')
def about(request):
    return render(request, 'dashboard/pages-blank.html')
def resume(request):
    return render(request, 'resume/index.html')
def get_resume(request):
    return render(request, 'resume/form.html')


def contact_us(request):
    if request.method=="POST":
        message = contact_us()
        name=request.POST.get('name')
        email=request.POST.get('email')
        subject=request.POST.get('subject')
        message=request.POST.get('message')

        message.save()
        print("done")
        return render(request, 'dashboard/pages-contact.html')
    else:
        print("error")
        return render(request, 'dashboard/pages-contact.html')    
