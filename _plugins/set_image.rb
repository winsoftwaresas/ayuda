module Jekyll
  class SetImageTag < Liquid::Tag
    def initialize(tag_name, params, tokens)
      super
      @params = parse_params(params)
    end
    def render(context)
      site = context.registers[:site]
      collection_name = context.environments.first['page']['collection']
      config_path = site.config['collections'][collection_name]['media_path']
      frontmatter_path = context.environments.first['page']['media']
      path = @params['path'].strip.empty? ? (frontmatter_path || config_path) : @params['path']
      filename = @params['filename'] || ''
      alt = @params['alt'] || ''
      number = @params['number'] || ''
      css_class = @params['css_class'] || nil
      
      # Lógica para obtener el número del nombre del archivo y manejar versiones
      if number.empty? && filename
        if filename =~ /^(.*?)_(\d+)\./
          version_part = $1
          image_number_part = $2
          
          # Si la versión comienza con '0.', conserva el '0'. Si no, elimina ceros iniciales
          if version_part.start_with?('0.')
            version_formatted = version_part
          else
            version_formatted = version_part.split('.').map(&:to_i).join('.')
          end
          
          # Elimina el cero inicial del número de imagen
          image_number_formatted = image_number_part.to_i.to_s
          
          number = "#{version_formatted}.#{image_number_formatted}"
        elsif filename =~ /^(\d+)\./
          number = $1.to_i
        end
      end
      
      image_src = "#{path}#{filename}"
      
      <<~HTML.strip
        <figure#{css_class ? " class=\"#{css_class}\"" : ""}>
          <img src="#{image_src}" alt="#{alt}" loading="lazy" />
          <figcaption>
            <strong>Imagen #{number}</strong>: #{alt}
          </figcaption>
        </figure>
      HTML
    end
    private
    def parse_params(params)
      params.split("\n").each_with_object({}) do |line, hash|
        key, value = line.strip.split(":", 2)
        if key && value
          hash[key.strip] = value.strip.gsub(/^["']|["']$/, "")
        end
      end
    end
  end
end
Liquid::Template.register_tag('set_image', Jekyll::SetImageTag)