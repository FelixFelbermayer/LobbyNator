# Example Rails App with ActiveStorage

To prepare the database

    rails active_storage:install
    rails db:migrate

Information about uploaded files is stored in two tables,
you only need to add one line to your model to add one or many files:

    class Cat < ApplicationRecord
      has_one_attached :catpic
    end

Display the image:

    <% if @cat.catpic.attached? %>
      <%= image_tag url_for(@cat.catpic) %>
    <% end %>

Form to upload:

    <div class="field">
      <%= form.label :catpic %>
      <%= form.file_field :catpic %>
    </div>

Don't forget to allow this parameter in the controller:

    # Only allow a list of trusted parameters through.
    def cat_params
      params.require(:cat).permit(:name, :catpic)
    end