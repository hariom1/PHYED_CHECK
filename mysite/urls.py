"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin 
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from . import views
from chat import views as view_chat
from django.views.generic import TemplateView 
from django.contrib.auth import views as auth_views
from django.urls import path, re_path
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('jobs/', TemplateView.as_view(template_name='index.html')),
    path('learn/', TemplateView.as_view(template_name='build/index.html')),
    path('chat/',include('chat.urls')),
    path('accounts/', include('allauth.urls')),
    #  re_path(r'^jobs/(?P<remaining_path>.*)$', RedirectView.as_view(url='/jobs/%(remaining_path)s')),
    re_path(r'^jobs/.+$', RedirectView.as_view(url='/jobs/')),
    # re_path(r'^.+$', RedirectView.as_view(url='/jobs/')),
    re_path(r'^(\d+)$', RedirectView.as_view(url='/jobs/')),

    re_path(r'^(?!static/|favicon.ico).*$', TemplateView.as_view(template_name='build/index.html')),

    
    ] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
