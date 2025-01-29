module Jekyll
    class SetImageTag < Liquid::Tag
      def initialize(tag_name, params, tokens)
        super
        @params = parse_params(params)
      end
  
      def render(context)
        site = context.registers[:site]
        path = @params['path'] || ''
        filename = @params['filename'] || ''
        alt = @params['alt'] || ''
        number = @params['number'] || ''
        css_class = @params['css_class'] || nil
  
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
        # Divide por líneas y luego busca los pares clave:valor
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
  