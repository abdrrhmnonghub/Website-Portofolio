from django.urls import path
from django_distill import distill_path
from . import views

# Fungsi ini wajib ada untuk memberi tahu distill bahwa halaman ini tidak butuh parameter dinamis
def get_index():
    return None 

urlpatterns = [
    # Ganti path menjadi distill_path
    distill_path('', views.home, name='home', distill_func=get_index, distill_file='index.html'),
]