from django.conf import settings
import os
from joblib import load
import pickle

def load_models():
    vectorizer_model_path = os.path.join(settings.BASE_DIR, "models", "vectorizer.pkl")
    nb_model_path = os.path.join(settings.BASE_DIR, "models", "model.pkl")
    
    vect_model = pickle.load(open(vectorizer_model_path, "rb"))
    nb_model = pickle.load(open(nb_model_path, "rb"))
    
    return nb_model, vect_model