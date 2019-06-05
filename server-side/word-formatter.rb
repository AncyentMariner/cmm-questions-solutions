def parse_text_file(file_name)
  file = File.open(file_name)
  text = file.read
  file.close

  text
end

def format_text(text_block, char_limit = 80)
  paragraphs = text_block.split("\n\n")

  formatted_paragraphs = paragraphs.map do |paragraph|
    # gather all words in one string
    all_words = paragraph.gsub(/\n/, ' ')
    # break text (on word end) at char_limit characters, and continue on with gsub
    all_words.gsub(/(.{1,#{char_limit}})(\s+|$)/, "\\1\n").strip
  end

  # return all paragraphs with a new line between
  print formatted_paragraphs.join("\n")
end

text_block = parse_text_file('word_wrap .txt')
format_text(text_block)
