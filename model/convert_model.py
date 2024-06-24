import tensorflow as tf

# Path to the old SavedModel directory
saved_model_path = 'C:/Users/rawat/Downloads/SavedModel_20201121'

# Load the old SavedModel
model = tf.keras.models.load_model(saved_model_path)

# Save the model in the new SavedModel format
new_saved_model_path = 'C:/Users/rawat/Downloads/NewSavedModel'
model.save(new_saved_model_path)

# Load the newly saved model
model = tf.keras.models.load_model(new_saved_model_path)

# Save it in the .h5 format
h5_model_path = new_saved_model_path + '/model.h5'
model.save(h5_model_path)

print(f"Model successfully saved in .h5 format at: {h5_model_path}")
