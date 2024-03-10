from django.shortcuts import render
from .models import User
# Create your views here.

from .serializers import MyTOPS, RegistrationSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protectedView(request):
    output = f"{request.user}, Authentication Successful!"
    return Response({'response':output}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])


def dashboard(request):
    user = request.user
    # Your dashboard logic here
    dashboard_data = {
        "username": user.username,

        # Add more data as needed
    }
    return Response(dashboard_data)

@api_view(['GET'])
def view_all_routes(request):
    data = [
        'api/token/refresh/',
        'api/register/',  # register api endpoint
        'api/token/',  # login api endpoint
        'api/dashboard/',  # dashboard api endpoint
    ]
    return Response(data)
